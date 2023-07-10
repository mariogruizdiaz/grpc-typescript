// package: sitesections
// file: sitesections.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SiteSection extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteSection;

    getSitesectionname(): string;
    setSitesectionname(value: string): SiteSection;


    hasAppname(): boolean;
    clearAppname(): void;
    getAppname(): google_protobuf_struct_pb.Struct | undefined;
    setAppname(value?: google_protobuf_struct_pb.Struct): SiteSection;


    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): google_protobuf_struct_pb.Struct | undefined;
    setDevice(value?: google_protobuf_struct_pb.Struct): SiteSection;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): google_protobuf_struct_pb.Struct | undefined;
    setChannel(value?: google_protobuf_struct_pb.Struct): SiteSection;

    getSitesectionid(): string;
    setSitesectionid(value: string): SiteSection;

    getSiteid(): string;
    setSiteid(value: string): SiteSection;


    hasDatecreated(): boolean;
    clearDatecreated(): void;
    getDatecreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatecreated(value?: google_protobuf_timestamp_pb.Timestamp): SiteSection;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteSection.AsObject;
    static toObject(includeInstance: boolean, msg: SiteSection): SiteSection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteSection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteSection;
    static deserializeBinaryFromReader(message: SiteSection, reader: jspb.BinaryReader): SiteSection;
}

export namespace SiteSection {
    export type AsObject = {
        Id: string,
        sitesectionname: string,
        appname?: google_protobuf_struct_pb.Struct.AsObject,
        device?: google_protobuf_struct_pb.Struct.AsObject,
        channel?: google_protobuf_struct_pb.Struct.AsObject,
        sitesectionid: string,
        siteid: string,
        datecreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SiteSectionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteSectionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteSectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SiteSectionRequest): SiteSectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteSectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteSectionRequest;
    static deserializeBinaryFromReader(message: SiteSectionRequest, reader: jspb.BinaryReader): SiteSectionRequest;
}

export namespace SiteSectionRequest {
    export type AsObject = {
        id: string,
    }
}
