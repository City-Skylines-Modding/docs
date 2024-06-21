# Modding Cities: Skylines

## Introduction

Cities: Skylines is a city-building simulation game developed by Colossal Order and published by Paradox Interactive. The game allows players to build and manage their own cities, including zoning land for residential, commercial, and industrial use, constructing roads and public transportation systems, and managing the city's budget and services.

## Infrastructure

Cities: Skylines is built using the Unity Engine, a popular game development platform known for its versatility and ease of use. Unity's underlying technology is based on the .NET framework and utilizes the Mono framework, which allows developers to write scripts in C# or UnityScript (a variant of JavaScript).

Unity's C# scripting language is particularly popular among developers due to its simplicity and performance. It provides a powerful and flexible way to interact with the game's engine and create custom gameplay mechanics, user interfaces, and other features.

One of the key strengths of Unity is its ability to support plugins through a C++ DLL interface. This enables developers to extend the game's functionality by creating custom plugins that can interact with the game's core systems.

## Official Modding API

To learn more about modding Cities: Skylines, you can refer to the official Modding API documentation provided by Colossal Order. The [Modding API](https://skylines.paradoxwikis.com/Modding_API) includes information on how to create mods for the game, including examples, tutorials, and reference documentation.

## Community Resources

In addition to the official Modding API documentation, there are many community resources available to help you get started with modding Cities: Skylines. These resources include forums, wikis, tutorials, and modding tools that can help you create and share your mods with other players.

## Game Architecture tips

### Game Architecture Tips

Understanding the architecture of Cities: Skylines can be crucial for modding the game effectively. Here are some tips to help you navigate the game's architecture:

1. **Understanding Unity:** Cities: Skylines is built using the Unity Engine, which provides a framework for developing 2D and 3D games. Familiarize yourself with Unity's GameObjects, Components, and Scenes, as these are fundamental building blocks of the game.

2. **Modularity:** Cities: Skylines is designed with a modular architecture, allowing different systems (e.g., traffic, economy, simulation) to interact with each other through well-defined interfaces. When creating mods, it's essential to understand these interfaces to integrate your mod seamlessly into the game.

3. **Scripting:** Cities: Skylines uses C# scripting for gameplay logic and modding. Understanding C# and how it interacts with Unity's API is essential for creating mods. You can find extensive documentation and tutorials on C# and Unity scripting on the Unity website.

4. **Event System:** Cities: Skylines uses an event system to communicate between different parts of the game. This system allows mods to listen for specific events (e.g., building constructed, simulation tick) and react accordingly. Understanding how to use the event system can help you create mods that respond dynamically to in-game events.

5. **Performance Optimization:** Cities: Skylines is a complex simulation game that can put a strain on hardware, especially when running multiple mods. When creating mods, consider optimizing your code for performance to ensure that it runs smoothly alongside other mods and the base game.

6. **Community Support:** The Cities: Skylines modding community is active and supportive. If you run into issues or need help with your mods, don't hesitate to reach out to the community forums or Discord channels for assistance.

For more information about Unity game architecture, you can refer to this [YouTube Playlist](https://www.youtube.com/playlist?list=PLCScRlcm12PAWztVXDKrGnhHvM-PDxHJw).
