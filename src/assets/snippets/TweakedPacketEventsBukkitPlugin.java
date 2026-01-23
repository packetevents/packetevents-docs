import com.github.retrooper.packetevents.PacketEvents;
import com.github.retrooper.packetevents.util.TimeStampMode;
import io.github.retrooper.packetevents.factory.spigot.SpigotPacketEventsBuilder;
import org.bukkit.plugin.java.JavaPlugin;

public class YourBukkitPlugin extends JavaPlugin {

    @Override
    public void onLoad() {
        // Create our PacketEvents instance
        PacketEvents.setAPI(SpigotPacketEventsBuilder.build(this));

        // Configure PacketEvents settings
        PacketEvents.getAPI().getSettings().checkForUpdates(true).debug(false)
                .timeStampMode(TimeStampMode.MILLIS);

        // Load PacketEvents
        PacketEvents.getAPI().load();

        /*
         * MORE CODE MAY APPEAR HERE (such as registering listeners)
         */
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
