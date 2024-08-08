from PIL import Image, ImageOps

# Load the uploaded image
image_path = "assets\images\logo.png"
image = Image.open(image_path)

# Invert the colors
inverted_image = ImageOps.invert(image.convert("RGB"))

# Save the inverted image
inverted_image_path = "assets\images\logo2.png"
inverted_image.save(inverted_image_path)

inverted_image.show()