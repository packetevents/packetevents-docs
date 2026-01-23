import com.github.retrooper.packetevents.event.PacketListener;
import com.github.retrooper.packetevents.event.PacketSendEvent;
import com.github.retrooper.packetevents.protocol.packettype.PacketType;
import com.github.retrooper.packetevents.wrapper.play.server.WrapperPlayServerUpdateHealth;
import org.jspecify.annotations.NullMarked;

@NullMarked
public class ExampleListener implements PacketListener {

    @Override
    public void onPacketSend(PacketSendEvent event) {
        if (event.getPacketType() == PacketType.Play.Server.UPDATE_HEALTH) {
            // health of the connected player was updated!
            WrapperPlayServerUpdateHealth packet = new WrapperPlayServerUpdateHealth(event);
            float health = packet.getHealth();
        }
    }
}
