export type Message = {
    id: number;
    type: MessageType;
    sendmessage: string;
};
declare enum MessageType {
    "Image" = "Image",
    "Audio" = "Audio"
}
export {};
