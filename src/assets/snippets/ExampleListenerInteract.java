import com.github.retrooper.packetevents.event.PacketListener;
import com.github.retrooper.packetevents.event.PacketReceiveEvent;
import com.github.retrooper.packetevents.protocol.packettype.PacketType;
import com.github.retrooper.packetevents.protocol.player.User;
import com.github.retrooper.packetevents.wrapper.play.client.WrapperPlayClientInteractEntity;
import io.github.retrooper.packetevents.util.SpigotConversionUtil;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.event.HoverEvent;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.text.format.TextDecoration;
import org.bukkit.entity.Entity;
import org.jspecify.annotations.NullMarked;

@NullMarked
public class ExampleListener implements PacketListener {

    @Override
    public void onPacketReceive(PacketReceiveEvent event) {
        User user = event.getUser();
        // Whenever the player sends an entity interaction packet.
        if (event.getPacketType() == PacketType.Play.Client.INTERACT_ENTITY) {
            WrapperPlayClientInteractEntity packet = new WrapperPlayClientInteractEntity(event);
            WrapperPlayClientInteractEntity.InteractAction action = packet.getAction();
            if (action == WrapperPlayClientInteractEntity.InteractAction.ATTACK) {
                int entityID = packet.getEntityId();

                // Find the Bukkit entity (WARNING: unsafe method!)
                Entity entity = SpigotConversionUtil.getEntityById(null, entityID);

                // Create a chat component with the Adventure API
                Component message = Component.text("You attacked an entity.")
                        .hoverEvent(HoverEvent.hoverEvent(
                                HoverEvent.Action.SHOW_TEXT,
                                Component.text("Entity Name: " + entity.getName())
                                        .color(NamedTextColor.GREEN)
                                        .decorate(TextDecoration.BOLD)
                                        .decorate(TextDecoration.ITALIC)
                        ));

                // Send it to the cross-platform user
                user.sendMessage(message);
            }
        }
    }
}
