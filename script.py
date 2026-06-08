import base64
import re
from io import BytesIO
from PIL import Image
import colorsys

def shift_hue(image):
    img = image.convert("RGBA")
    data = img.getdata()
    new_data = []
    
    # #00ff41 is RGB (0, 255, 65)
    # in HSV: h=0.375, s=1.0, v=1.0
    target_h = 135.0 / 360.0
    
    for r, g, b, a in data:
        if a == 0:
            new_data.append((r, g, b, a))
            continue
            
        h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
        
        # Check if the color is purple-ish
        # Purple hue is generally between 240 (0.66) and 310 (0.86)
        if 0.65 <= h <= 0.90 and s > 0.1:
            # Shift hue to neon green, boost saturation and value
            r_new, g_new, b_new = colorsys.hsv_to_rgb(target_h, min(1.0, s * 1.5), min(1.0, v * 1.5))
            new_data.append((int(r_new * 255), int(g_new * 255), int(b_new * 255), a))
        else:
            new_data.append((r, g, b, a))
            
    img.putdata(new_data)
    return img

# Process avatar.png
try:
    avatar = Image.open("src/Assets/avatar.png")
    avatar_new = shift_hue(avatar)
    avatar_new.save("src/Assets/avatar.png")
    print("Processed avatar.png")
except Exception as e:
    print(f"Error processing avatar.png: {e}")

# Process home-main.svg
try:
    with open("src/Assets/home-main.svg", "r") as f:
        svg_content = f.read()
    
    # Extract base64
    match = re.search(r'href="data:image/png;base64,([^"]+)"', svg_content)
    if match:
        b64_data = match.group(1)
        img_data = base64.b64decode(b64_data)
        img = Image.open(BytesIO(img_data))
        
        img_new = shift_hue(img)
        
        buffered = BytesIO()
        img_new.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
        
        svg_new = svg_content.replace(b64_data, img_str)
        with open("src/Assets/home-main.svg", "w") as f:
            f.write(svg_new)
        print("Processed home-main.svg")
except Exception as e:
    print(f"Error processing home-main.svg: {e}")
