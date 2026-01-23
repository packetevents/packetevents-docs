import com.github.retrooper.packetevents.PacketEvents;
import com.github.retrooper.packetevents.event.EventManager;
import com.github.retrooper.packetevents.event.PacketListenerPriority;
import org.bukkit.plugin.java.JavaPlugin;

public class YourBukkitPlugin extends JavaPlugin {

    @Override
    public void onLoad() {
        EventManager events = PacketEvents.getAPI().getEventManager();
        events.registerListener(new ExampleListener(), PacketListenerPriority.NORMAL);
    }
}
