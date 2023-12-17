import type { BroadcastType, Broadcast as OriginalBroadcast } from "@prisma/client"

export type Broadcast = OriginalBroadcast & {
    broadcastType: BroadcastType
}
    
