---
title: FAQ
description: Frequently asked questions will be answered here.
---

Do not worry if you haven't grasped all the answers just yet. This section assumes a certain level of familiarity with
the library. Consider it a TL;DR to get oriented, and feel free to navigate directly to the detailed guide if needed.

## Does PacketEvents have a Discord Server?

Yes. You can ask for support on the [discord server](https://discord.com/invite/DVHxPPxHZc). If you wish to report a
bug, please resort to our [GitHub issues section](https://github.com/retrooper/packetevents/issues).

## Is PacketEvents free software?

Yes. PacketEvents is free software. Learn more about what that
means [here](https://gnu.org/philosophy/free-sw.html). Moreover, PacketEvents is licensed under the GPLv3.

## Should I shade the PacketEvents API into my plugin?

No. TODO elaborate.

## Why do I get a "NoClassDefFoundError" when using the PacketEvents API in my plugin?

### Cause #1

Your server probably can't find the PacketEvents API. You can fix this by shading the dependency into your plugin or
downloading the plugin version from [SpigotMC](https://spigotmc.org/resources/80279/)
or [Modrinth](https://modrinth.com/plugin/packetevents) on your server.

### Cause #2

The version of PacketEvents your plugin is using is not compatible with the version that is being shaded into your
plugin or that is present on the server.
