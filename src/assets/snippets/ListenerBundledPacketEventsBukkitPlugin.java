import com.github.retrooper.packetevents.PacketEvents;
import com.github.retrooper.packetevents.event.PacketListenerPriority;
import io.github.retrooper.packetevents.factory.spigot.SpigotPacketEventsBuilder;
import org.bukkit.plugin.java.JavaPlugin;

public class YourBukkitPlugin extends JavaPlugin {

    @Override
    public void onLoad() {
        // Building, loading, and initializing the library is necessary when bundling (or shading).
        PacketEvents.setAPI(SpigotPacketEventsBuilder.build(this));
        PacketEvents.getAPI().load();

        // Register our listener
        PacketEvents.getAPI().getEventManager().registerListener(new ExampleListener(),
                PacketListenerPriority.NORMAL);
    }

    @Override
    public void onEnable() {
        // Initialize the library!
        PacketEvents.getAPI().init();
    }

    @Override
    public void onDisable() {
        // Clean-up process
        PacketEvents.getAPI().terminate();
    }
}
