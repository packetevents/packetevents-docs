---
title: The Problem of Bundling
---

Before we embark on our development journey, we must make some important decisions. These decisions may impact your
project's success, marketability, and most importantly, size.

If you haven't guessed it yet, we're going to discuss a concept known as bundling (often referred to as shading).
Bundling is the process of storing a project's dependencies in the distribution file. When publishing your mod or plugin
on a forum, you have the option to bundle PacketEvents into your project distribution (or output) file. The benefits are
straightforward: end-users won't have to proactively install PacketEvents (as a dependency), thereby simplifying the
installation process.

We understand that bundling is appealing to many end-users—it makes projects easier to set up. However, bundling comes
with important downsides, which is why, from an official standpoint, we discourage it. Bundling places the
responsibility of keeping PacketEvents up-to-date on you, the developer. If your users encounter issues or update to a
new Minecraft version, they may need a newer version of PacketEvents. They cannot update it themselves; they must wait
for you to release a new version of your project that includes the updated library. Based on anonymized data, we suspect
that one reason users remain on outdated versions of PacketEvents is because plugin developers choose to bundle it,
unintentionally delaying access to the latest improvements. Additionally, bundling complicates responsibility whenever
software malfunctions. We frequently see the following scenario:

:::note[Responsibility Issue]
**Bob** installs plugin **Vulcan**, developed by programmer **frap**, and **Vulcan** includes PacketEvents. **Bob**’s
server throws an error while **Vulcan** is installed. **Bob** reports the issue to **frap**, assuming that **Vulcan** is
at fault. Eventually, **frap** finds out the issue is actually caused by PacketEvents and forwards the issue to the
PacketEvents team.
:::

In cases like this, there is often a significant delay before the PacketEvents team receives the error. If the issue
originated in PacketEvents, the user would normally report it to us directly. This indirect reporting chain complicates
communication—we may need follow‑up information, and the developer may need to reconnect us with the user.

Overall, our assessment is the following: whether you choose to bundle PacketEvents depends on your priorities. If you
prioritize marketability, you may prefer bundling PacketEvents with your project because this simplifies installation
for most users. However, if your priority is user experience, you should avoid bundling. Imagine a new Minecraft update
releases while you are on vacation and unable to update your plugin. If PacketEvents runs separately from your project,
your users can update it on their own, and in many cases your plugin will continue to function without requiring an
immediate update from you. While we cannot guarantee complete backwards compatibility, we make a strong effort to
minimize breaking changes in our library.
