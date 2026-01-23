---
title: Sending and Simulating Packets
description: Direct communication.
slug: sending-and-simulating-packets
---

## Where Do We Start?

PacketEvents provides two core capabilities that you will use throughout your project: sending packets and receiving
packets. PacketEvents provides many other features and utilities, some of which we may explore later, but for now,
understanding how to send and receive packets is enough to get started.

## Sending Packets

Sending packets is another feature provided by PacketEvents. Firstly, you need to know what kind of packet you want to
send to the client. The next step is finding the appropriate wrapper in PacketEvents. You'll then create an instance of
the wrapper, and finally, you'll send it to the client using our API.

We'll illustrate how you can send packets using an example. Let's send the client an "Update Health" packet, resetting
their food and health values. Information about this specific packet is
available [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol).

### Sending Packets using the PacketEvents Cross-Platform User

```java
User user = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayServerUpdateHealth packet = new WrapperPlayServerUpdateHealth(
    20f, // Health (0-20)
    20, // Food (0-20)
    5f); // Food saturation (0-5)
// Finally, send it to the user.
user.sendPacket(packet);
```

### Sending Packets using the Bukkit (or Velocity) Player

```java
Player player = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayServerUpdateHealth packet = new WrapperPlayServerUpdateHealth(
    20f, // Health (0-20)
    20, // Food (0-20)
    5f); // Food saturation (0-5)
// Finally, send it to the player.
PacketEvents.getAPI().getPlayerManager().sendPacket(player, packet);
```

### Sending Packets using the BungeeCord ProxiedPlayer

```java
ProxiedPlayer player = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayServerUpdateHealth packet = new WrapperPlayServerUpdateHealth(
    20f, // Health (0-20)
    20, // Food (0-20)
    5f); // Food saturation (0-5)
// Finally, send it to the player.
PacketEvents.getAPI().getPlayerManager().sendPacket(player, packet);
```

:::caution
Confirm that the packet you are sending is supported by your Minecraft version.
:::

## Simulating Packets

Packet simulation is also supported in PacketEvents. Now, what do we mean by "packet simulation"? From the server's
perspective, sending packets means that the server is the one sending information to the client. It therefore follows
that the reception of packets, in this context, means that the server is receiving information from a client.
PacketEvents allows us to "trick" the server and send a fake packet on behalf of a client. Be cautious, readers! Using
this feature can break the functionality of other plugins on your server; hence, you should avoid it whenever possible.

We'll demonstrate how you can simulate packets using an example. Let's simulate an Animation (Swing Arm) packet, making
it appear like the client swung their arm. More information about this specific packet is
available [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol#Swing_Arm).

:::caution
This feature might break the functionality of other plugins.
:::

### Simulating Packets using the PacketEvents Cross-Platform User

```java
User user = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayClientAnimation packet = new WrapperPlayClientAnimation(
    InteractionHand.MAIN_HAND);
// Finally, fake the incoming packet.
user.receivePacket(packet);
```

### Simulating Packets using the Bukkit (or Velocity) Player

```java
Player player = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayClientAnimation packet = new WrapperPlayClientAnimation(
    InteractionHand.MAIN_HAND);
// Finally, fake the incoming packet.
PacketEvents.getAPI().getPlayerManager().receivePacket(player, packet);
```

### Simulating Packets using the BungeeCord ProxiedPlayer

```java
ProxiedPlayer player = ...;
WrapperPlayClientAnimation packet = new WrapperPlayClientAnimation(
    InteractionHand.MAIN_HAND);
// Finally, fake the incoming packet.
PacketEvents.getAPI().getPlayerManager().receivePacket(player, packet);
```

## Sending and Simulating Packets... Silently?

The title might seem a tad bit confusing, so we'll clarify what we mean by that. Above, you not only learned how to send
packets, but also how to fake incoming packets. These features are useful to many developers, yet still might cause some
issues (E.g. StackOverflowException). You might want to differentiate between the packets that you caused and the
packets that you did not cause. The simplest way of doing so is by sending or simulating packets "silently". This will
still perform the action, but it will not trigger your packet listener. Yet again, this is something you want to be
cautious with. This feature can break compatibility with other plugins, thus please avoid it if possible.

:::caution
This feature might break the functionality of other plugins.
:::

### Sending Packets Silently

```java
User user = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayServerUpdateHealth packet = new WrapperPlayServerUpdateHealth(
    20d, // Health (0-20)
    20, // Food (0-20)
    5d); // Food saturation (0-5)
// Finally, send it to the user without triggering their listeners.
user.sendPacketSilently(packet);
```

### Simulating Packets Silently

```java
User user = ...;
// Create the packet (feed it all the data it needs).
WrapperPlayClientAnimation packet = new WrapperPlayClientAnimation(
    InteractionHand.MAIN_HAND);
// Finally, fake the incoming packet without triggering their listeners.
user.receivePacketSilently(packet);
```
