plugins {
    id("com.gradleup.shadow") version "9.3.1"
    // your other plugins...
}

tasks.shadowJar {
    relocate("com.github.retrooper", "my.domain.myplugin.libs.packetevents")
    relocate("io.github.retrooper", "my.domain.myplugin.libs.packetevents")
    relocate("net.kyori", "my.domain.myplugin.libs.kyori")
    relocate("com.google.gson", "my.domain.myplugin.libs.gson")
}
