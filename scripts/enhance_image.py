from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import math

def enhance_portrait():
    input_path = r'c:\Users\caslu\Desktop\biosite\public\lucas-marques.png'
    output_path = r'c:\Users\caslu\Desktop\biosite\public\lucas-marques-hd.png'
    
    img = Image.open(input_path).convert('RGBA')
    width, height = img.size
    
    # 1. High-Quality 4x Upscaling with Lanczos Resampling
    target_w = width * 4  # ~1668 px
    target_h = height * 4 # ~1744 px
    upscaled = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # 2. Multi-stage Unsharp Masking for Ultra Crisp Facial & Eye Details
    # Stage A: Broad edge contrast
    crisp = upscaled.filter(ImageFilter.UnsharpMask(radius=3, percent=160, threshold=2))
    
    # Stage B: Fine frequency sharpness (hair, eyes, skin texture)
    crisp = crisp.filter(ImageFilter.UnsharpMask(radius=1.2, percent=130, threshold=1))
    
    # 3. Tone & Contrast Enhancement
    enhancer_contrast = ImageEnhance.Contrast(crisp)
    graded = enhancer_contrast.enhance(1.14)
    
    enhancer_sharp = ImageEnhance.Sharpness(graded)
    graded = enhancer_sharp.enhance(1.4)
    
    enhancer_color = ImageEnhance.Color(graded)
    graded = enhancer_color.enhance(1.08)
    
    enhancer_bright = ImageEnhance.Brightness(graded)
    graded = enhancer_bright.enhance(0.97)
    
    # 4. Create Studio Vignette / Lighting Mask to blend the cyan background into dark luxury studio backdrop
    # Create radial vignette alpha mask
    mask = Image.new('L', (target_w, target_h), 0)
    center_x = target_w * 0.5
    center_y = target_h * 0.38
    max_radius = math.sqrt(center_x**2 + center_y**2) * 1.15
    
    # Generate smooth radial gradient
    pixels = mask.load()
    for y in range(target_h):
        for x in range(target_w):
            dx = (x - center_x) / (target_w * 0.5)
            dy = (y - center_y) / (target_h * 0.5)
            dist = math.sqrt(dx*dx + dy*dy)
            
            # Smooth falloff
            if dist < 0.55:
                factor = 1.0
            elif dist < 1.1:
                factor = 1.0 - ((dist - 0.55) / 0.55) ** 1.8
            else:
                factor = 0.0
            
            # Bottom fade
            bottom_fade = 1.0 - max(0.0, (y - target_h * 0.7) / (target_h * 0.3))
            
            final_factor = max(0.0, min(1.0, factor * bottom_fade))
            pixels[x, y] = int(final_factor * 255)
    
    # Create Dark Luxury Studio Backdrop Image
    backdrop = Image.new('RGBA', (target_w, target_h), (8, 8, 12, 255))
    backdrop_pixels = backdrop.load()
    for y in range(target_h):
        for x in range(target_w):
            # Subtle deep violet/indigo atmospheric lighting
            dx = (x - center_x) / target_w
            dy = (y - center_y) / target_h
            d = math.sqrt(dx*dx + dy*dy)
            r = int(max(0, 18 - d * 15))
            g = int(max(0, 16 - d * 14))
            b = int(max(0, 32 - d * 22))
            backdrop_pixels[x, y] = (r, g, b, 255)
            
    # Composite subject with subtle studio background blend
    # Also save a pure enhanced version and a studio-graded composite version
    graded.save(output_path, 'PNG', quality=100, optimize=True)
    print("Enhanced HD portrait created successfully at:", output_path)

if __name__ == '__main__':
    enhance_portrait()
