---
title: A Developer's Introduction
description: Where do we start?
---

## PacketEvents Platform-Agnostic Replacements

PacketEvents is designed to support multiple platforms. Thus, you're provided with alternatives to platform-specific
features. You do not have to use our cross-platform features, but they may be useful if you're targeting multiple
Minecraft platforms. These features behave consistently regardless of where the project is deployed.

For example, on Bukkit‑based platforms, you typically work with a [
`Player`](https://jd.papermc.io/paper/1.21.11/org/bukkit/entity/Player.html) instance to access or modify data about a
player. PacketEvents essentially replaces this with its own [
`User`](https://javadocs.packetevents.com/com/github/retrooper/packetevents/protocol/player/User.html) type, which
represents a network connection in a cross-platform way. The [
`User`](https://javadocs.packetevents.com/com/github/retrooper/packetevents/protocol/player/User.html) API provides
information about a connected client while also allowing you to perform actions on that connected client, such as
sending them a text message or a title. Another example is entity types. Bukkit defines their own [
`EntityType`](https://jd.papermc.io/paper/1.21.11/org/bukkit/entity/EntityType.html) class, whereas PacketEvents
provides a separate [
`EntityType`](https://javadocs.packetevents.com/com/github/retrooper/packetevents/protocol/entity/type/EntityType.html)
that works across all supported platforms.

## Converter System

To help bridge the gap between Minecraft platform implementations and the PacketEvents library, we provide a converter
system. The converter allows you to translate between PacketEvents types and platform‑specific types when necessary.
This is useful when you are integrating PacketEvents into a codebase that is intended to run on all supported platforms,
or if you plan to support multiple platforms in the future.

:::caution[Warning]
Please do not convert between structures _too often_, as some of the conversion processes are more computationally
expensive than others. We're still exploring ways in which we can optimize certain conversion processes.
:::

:::note[Hint]
On Bukkit-based platforms, use the [
`SpigotConversionUtil`](https://javadocs.packetevents.com/spigot/io/github/retrooper/packetevents/util/SpigotConversionUtil.html)
to convert between PacketEvents and Bukkit structures.
:::

We'll start with a practical problem. How do we convert a Bukkit ItemStack to a PacketEvents ItemStack? Let's assume we'
re targeting Bukkit-based platforms. Follow along with the code below:

```java
...
import com.github.retrooper.packetevents.protocol.item.ItemStack;
import io.github.retrooper.packetevents.util.SpigotConversionUtil;
...

// Here's your Bukkit ItemStack
org.bukkit.inventory.ItemStack bukkitItemStack = ...;

// Here's your converted PacketEvents ItemStack
ItemStack packetEventsItemStack = SpigotConversionUtil.fromBukkitItemStack(bukkitItemStack);
```

So, that was quite simple. How do we do the reverse? How can we convert a PacketEvents ItemStack into a Bukkit
ItemStack? Here's how we can do it:

```java
...
import com.github.retrooper.packetevents.protocol.item.ItemStack;
import io.github.retrooper.packetevents.util.SpigotConversionUtil;
...

// Here's your PacketEvents ItemStack
ItemStack packetEventsItemStack = ...;

// Here's your converted Bukkit ItemStack
org.bukkit.inventory.ItemStack bukkitItemStack = SpigotConversionUtil.toBukkitItemStack(packetEventsItemStack);
```

You've probably got the hang of it now. Conversion is relatively simple in PacketEvents. You may need to convert from
time to time. When sending packets with PacketEvents, you must use our types. When processing packets with PacketEvents,
you will interact with our types. If you plan on interacting with Bukkit, you may have to convert between types.

## Entity ID System

In the Minecraft protocol, each entity is represented by a numerical identifier (ID). When an entity is spawned, it is
assigned an ID equal to the `current_entity_counter + 1`. This ensures that every entity receives a unique identifier.
So, why is this relevant, you may ask? When processing packets pertaining to entities, you will receive an Entity ID.
But you may wish to access other information about the entity, such as the type of entity, name, location, and more. How
do we do that? You can leverage the Bukkit API! You need to convert the entity ID into a Bukkit [
`Entity`](https://jd.papermc.io/paper/1.21.11/org/bukkit/entity/Entity.html).

Here, again, you can make use of the conversion system. Here's an example that works on Bukkit-based platforms.

```java
int entityId = ...; // Received an Entity ID from PacketEvents

World world = null; // Can be null! (Providing a world can allow for faster search time)
// Retrieve Bukkit Entity
Entity bukkitEntity = SpigotConversionUtil.getEntityById(world, entityId);

// Now, we can access some data using Bukkit.
String entityName =[development-setup.mdx](development-setup.mdx) bukkitEntity.getName();
```

:::caution[Thread Safety]
This utility method is **not thread-safe** and may sometimes cause errors and/or unexpected results. If possible, avoid using this method altogether.
:::
