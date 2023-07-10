import { Any } from "google-protobuf/google/protobuf/any_pb";
import { Site } from "../proto/sites_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Writer } from "protobufjs";

export const sites: Site[] = [
  {
    Id: "1",
    sitesectionname: "Section A",
    appname: createAnyMessage(3, { name: "App 1" }).toObject(),
    device: createAnyMessage(4, { name: "Device 1" }).toObject(),
    channel: createAnyMessage(5, { name: "Channel 1" }).toObject(),
    sitesectionid: "section-a",
    siteid: "site-1",
    datecreated: createTimestamp(new Date("2022-01-01")).toObject(),
  },
  {
    Id: "2",
    sitesectionname: "Section B",
    appname: createAnyMessage(3, { name: "App 2" }).toObject(),
    device: createAnyMessage(4, { name: "Device 2" }).toObject(),
    channel: createAnyMessage(5, { name: "Channel 2" }).toObject(),
    sitesectionid: "section-b",
    siteid: "site-2",
    datecreated: createTimestamp(new Date("2022-02-01")).toObject(),
  },
].map(siteToClass);

function createAnyMessage(fielNumber: number, data: object): Any {
    const anyMessage = new Any();
    const writer = new Writer();
    writer.uint32(fielNumber).bytes(Buffer.from(JSON.stringify(data)));
    const serializedData = writer.finish();
    anyMessage.setValue(serializedData);
    anyMessage.setTypeUrl("example.AnyMessage");
    return anyMessage;
  }

function createTimestamp(date: Date): Timestamp {
  const timestamp = new Timestamp();
  timestamp.fromDate(date);
  return timestamp;
}

export function siteToClass(data: Site.AsObject): Site {
  const site = new Site();
  site.setId(data.Id);
  site.setSitesectionname(data.sitesectionname);
  site.setSitesectionid(data.sitesectionid);
  site.setSiteid(data.siteid);

  if (data.appname) {
    const appNameAny = new Any();
    appNameAny.pack(data.appname.value as Uint8Array, data.appname.typeUrl);
    site.setAppname(appNameAny);
  }

  if (data.device) {
    const deviceAny = new Any();
    deviceAny.pack(data.device.value as Uint8Array, data.device.typeUrl);
    site.setDevice(deviceAny);
  }

  if (data.channel) {
    const channelAny = new Any();
    channelAny.pack(data.channel.value as Uint8Array, data.channel.typeUrl);
    site.setChannel(channelAny);
  }

  if (data.datecreated) {
    const timestamp = new Timestamp();
    timestamp.setSeconds(data.datecreated.seconds);
    timestamp.setNanos(data.datecreated.nanos);
    site.setDatecreated(timestamp);
  }

  return site;
}
