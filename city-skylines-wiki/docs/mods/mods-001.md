# Basics of Modding Cities: Skylines

## Types of Mods

There are two types of mods for Unity games: DLL mods and Asset mods. DLL mods are mods that are written in C# and compiled into a DLL file. Asset mods are mods that are created by modifying the game's assets.

### DLL Mods

DLL mods are mods that are written in C# and compiled into a DLL file. These mods can be loaded into the game at runtime and can modify the game's behavior in various ways. DLL mods can be used to add new features to the game, fix bugs, or change the game's mechanics.

### Asset Mods

Asset mods are mods that are created by modifying the game's assets. These mods can be used to add new models, textures, sounds, or other assets to the game. Asset mods can be used to change the game's appearance, add new content, or modify existing content.

## File Structure

When creating mods for Cities: Skylines, it is important to understand the file structure of the game. The game's files are organized into several folders, each containing different types of assets. Here are some of the key folders in the game's file structure:

- **Managed**: Contains the game's managed DLL files, including the game's main assembly, `Assembly-CSharp.dll`.
- **Mono**: Contains the game's Mono libraries.
- **Plugins**: Contains the game's native plugins.
- **Resources**: Contains the game's asset bundles.
- **Mods**: Contains the game's mod files. Here, you can place your mod's DLL files and other assets.
- **User Data**: Contains the game's user data, including save files and configuration files.
- **Maps**: Contains the game's map files.
- **Saves**: Contains the game's save files.
- **Snapshots**: Contains captures taken from the map editor and asset editor with an identifying name for each capture.

## Files used in Cities: Skylines Modding

When creating mods for Cities: Skylines, you will be working with several types of files. Here are some of the key files used in Cities: Skylines modding:

- **CRP**: An internal file called Colossal Raw Package. These files work as containers and encapsulate any type of data such as saves files, maps, color correction lookup, tables, or assets.
- **DLL**: A Dynamic Link Library file that contains code that can be executed by the game.
- **Assembly**: A file that contains compiled code that can be executed by the game. These files are typically written in C# and compiled into DLL files.
- **FBX**: A file format used to store 3D models. These files can be imported into the game to add new models or modify existing ones.
- **Asset**: A file that contains game assets such as models, textures, sounds, or other resources. These files can be modified to change the game's appearance or add new content. Extensions found in the game are:

  - **png**: Portable Network Graphics (PNG) is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. PNG files support lossless compression, making them ideal for images that require transparency.
  - **jpg**: Joint Photographic Experts Group (JPEG or JPG) is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. JPEG files use lossy compression, which can result in a smaller file size but may reduce image quality.
  - **bmp**: Bitmap (BMP) is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. BMP files are uncompressed, which can result in larger file sizes compared to formats that use compression.
  - **dds**: DirectDraw Surface (DDS) is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. DDS files support various compression formats, which can be useful for optimizing texture storage and performance.
  - **tga**: Truevision TGA (TGA) is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. TGA files support various bit depths and compression methods, making them versatile for different image types.
  - **raw**: Raw image files contain minimally processed data from the image sensor of a digital camera or image scanner. These files can be imported into the game to add new textures or modify existing ones, but may require additional processing to be usable in the game.
  - **r8**: R8 is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. R8 files typically represent an 8-bit grayscale image.
  - **r16**: R16 is a file format used to store images. These files can be imported into the game to add new textures or modify existing ones. R16 files typically represent a 16-bit grayscale image.
  - **tiff**: Tagged Image File Format (TIFF) is a file format used to store images.
