---
title: Prerequisites
description: What do we expect of you?
---

## Networking and TCP/IP

Previously, we mentioned that PacketEvents is a library that facilitates the transmission and processing of packets on
Minecraft. Thus, some networking knowledge is paramount. Minecraft Java Edition (unlike Bedrock Edition) relies on the
TCP/IP protocol, and thus it would be great to have some knowledge about that. In summary, there are some promises that
are made to you, as a developer, when working with the TCP/IP protocol. First, the order in which packets are sent is
the same order in which packets are received.

:::note[Packet Order]
Suppose the server is instructed to send packet **SetHealth** to player **Steve** at time **10:00:01**, and then the
server is instructed to send packet **SpawnEntity** to **Steve** at time **10:00:02**. It follows that **Steve** will
receive **SetHealth** before **SpawnEntity**. If for some reason the server fails to send **SetHealth**, then it will
delay sending **SpawnEntity** until **SetHealth** is sent successfully.
:::

Another promise that is made to you is that dropped packets are rescheduled. TCP/IP is known for its high reliability on
packet delivery. This is a promise that other protocols, such as UDP/IP, do not deliver on.

:::note[Packet Rescheduling]
Suppose the server is instructed to send packet **SetHealth** to player **jeb_**. If the server fails to send **SetHealth** to **jeb_** for any reason, then the server will simply try again. This, of course, assumes the server is
never shut down or restarted.
:::

## Minecraft Protocol

Some knowledge of the [Minecraft Protocol](https://minecraft.wiki/w/Java_Edition_protocol/Packets) is necessary.
PacketEvents simply implements the protocol; it is not here to explain all of it to you. The protocol changes nearly
each Minecraft update. It's quite difficult to write documentation for a protocol that changes all the time. If you want
your software operational after Minecraft updates, you will have to update PacketEvents and possibly follow up with the
Minecraft Protocol changes. The community maintains a [wiki](https://minecraft.wiki/w/Java_Edition_protocol/Packets)
that covers the Minecraft protocol with high accuracy.

## Threading & Concurrency

Experience with threading and concurrency is also essential. Threading allows developers to execute tasks in parallel.
Here's an analogy we tend to use:

:::note[Concurrency Example]
A customer orders a meal, and the chef wants to minimize the wait time. The kitchen team has three workers: **Steve**
prepares the rice, **Alex** cooks the chicken, and **Retrooper** makes the coffee. If **Steve**, **Alex**, and **Retrooper** work concurrently, the customer waits only for the slowest task to finish. If they work sequentially, the
customer must wait for all three tasks to be completed one after another, which takes much longer.
:::

Not only is concurrency important in the kitchen, but it's even more important in software development. Minecraft
leverages concurrency to a degree. In Minecraft, network communication processing is handled by one (or multiple) worker
thread(s). Logic, such as NPC behavior and world generation, is handled by the so-called 'main thread.' Since we're
dealing with a multi-threaded system, you're going to have to design your software with caution. Multi-threading has its
benefits (performance-wise), but it can cause developers to run into many issues. Suppose, for instance, two threads
attempt to modify/access a particular piece of information at the same time. You may need to account for that. Thus, we
suggest that you familiarize yourself with concurrency & threading in Java before interacting with our library.
