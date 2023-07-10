// package: sites
// file: sites.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Site extends jspb.Message { 
    getId(): string;
    setId(value: string): Site;

    getSitesectionname(): string;
    setSitesectionname(value: string): Site;


    hasAppname(): boolean;
    clearAppname(): void;
    getAppname(): google_protobuf_any_pb.Any | undefined;
    setAppname(value?: google_protobuf_any_pb.Any): Site;


    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): google_protobuf_any_pb.Any | undefined;
    setDevice(value?: google_protobuf_any_pb.Any): Site;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): google_protobuf_any_pb.Any | undefined;
    setChannel(value?: google_protobuf_any_pb.Any): Site;

    getSitesectionid(): string;
    setSitesectionid(value: string): Site;

    getSiteid(): string;
    setSiteid(value: string): Site;


    hasDatecreated(): boolean;
    clearDatecreated(): void;
    getDatecreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatecreated(value?: google_protobuf_timestamp_pb.Timestamp): Site;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Site.AsObject;
    static toObject(includeInstance: boolean, msg: Site): Site.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Site, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Site;
    static deserializeBinaryFromReader(message: Site, reader: jspb.BinaryReader): Site;
}

export namespace Site {
    export type AsObject = {
        Id: string,
        sitesectionname: string,
        appname?: google_protobuf_any_pb.Any.AsObject,
        device?: google_protobuf_any_pb.Any.AsObject,
        channel?: google_protobuf_any_pb.Any.AsObject,
        sitesectionid: string,
        siteid: string,
        datecreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SiteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SiteRequest): SiteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteRequest;
    static deserializeBinaryFromReader(message: SiteRequest, reader: jspb.BinaryReader): SiteRequest;
}

export namespace SiteRequest {
    export type AsObject = {
        id: string,
    }
}
