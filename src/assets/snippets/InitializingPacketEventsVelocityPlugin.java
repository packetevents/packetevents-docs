import com.github.retrooper.packetevents.PacketEvents;
import com.google.common.eventbus.Subscribe;
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent;
import com.velocitypowered.api.event.proxy.ProxyShutdownEvent;
import com.velocitypowered.api.plugin.Plugin;
import com.velocitypowered.api.plugin.PluginContainer;
import com.velocitypowered.api.plugin.annotation.DataDirectory;
import com.velocitypowered.api.proxy.ProxyServer;
import io.github.retrooper.packetevents.velocity.factory.VelocityPacketEventsBuilder;
import jakarta.inject.Inject;
import org.slf4j.Logger;

import java.nio.file.Path;

@Plugin(...)
public class YourVelocityPlugin {

    private final ProxyServer server;
    private final Logger logger;
    private final PluginContainer pluginContainer;
    private final Path dataDirectory;

    @Inject
    public YourVelocityPlugin(
            final ProxyServer server,
            final Logger logger,
            final PluginContainer pluginContainer,
            final @DataDirectory Path dataDirectory
    ) {
        this.server = server;
        this.logger = logger;
        this.pluginContainer = pluginContainer;
        this.dataDirectory = dataDirectory;
    }

    @Subscribe
    public void onProxyInitialize(final ProxyInitializeEvent event) {
        PacketEvents.setAPI(VelocityPacketEventsBuilder.build(this.server, this.pluginContainer, this.logger, this.dataDirectory));
        PacketEvents.getAPI().load();

        /*
         * MORE CODE MAY APPEAR HERE (such as registering listeners)
         */
        PacketEvents.getAPI().init();
    }

    @Subscribe
    public void onProxyShutdown(ProxyShutdownEvent event) {
        PacketEvents.getAPI().terminate();
    }
}
