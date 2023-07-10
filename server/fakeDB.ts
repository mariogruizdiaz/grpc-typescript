import { Struct, Value } from "google-protobuf/google/protobuf/struct_pb";
import { SiteSection } from "../proto/sitesections_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Site } from "../proto/sites_pb";
import { SiteGroup } from "../proto/sitesgroups_pb";


//#region Site DB

export const sites: Site[] = [
    {
        Id: "1",
        sitename: "Site A",
        device: createAnyMessage({ name: "Device 1" }).toObject(),
        siteid: "site-1",
        datecreated: createTimestamp(new Date("2022-01-01")).toObject(),
    },
    {
        Id: "2",
        sitename: "Site B",
        device: createAnyMessage({ name: "Device 2" }).toObject(),
        siteid: "site-2",
        datecreated: createTimestamp(new Date("2022-02-01")).toObject(),
    },
].map(siteToClass);

export function siteToClass(data: Site.AsObject): Site {
    const site = new Site();
    site.setId(data.Id);
    site.setSitename(data.sitename);
    site.setSiteid(data.siteid);


    if (data.device) {
        const deviceStruct = createAnyMessage(data.device);
        site.setDevice(deviceStruct);
    }


    if (data.datecreated) {
        const timestamp = new Timestamp();
        timestamp.setSeconds(data.datecreated.seconds);
        timestamp.setNanos(data.datecreated.nanos);
        site.setDatecreated(timestamp);
    }

    return site;
}

//#endregion Site DB


//#region Site Sections DB
export const siteSections: SiteSection[] = [
    {
        Id: "1",
        sitesectionname: "Section A",
        appname: createAnyMessage({ name: "App 1" }).toObject(),
        device: createAnyMessage({ name: "Device 1" }).toObject(),
        channel: createAnyMessage({ name: "Channel 1" }).toObject(),
        sitesectionid: "section-a",
        siteid: "site-1",
        datecreated: createTimestamp(new Date("2022-01-01")).toObject(),
    },
    {
        Id: "2",
        sitesectionname: "Section B",
        appname: createAnyMessage({ name: "App 2" }).toObject(),
        device: createAnyMessage({ name: "Device 2" }).toObject(),
        channel: createAnyMessage({ name: "Channel 2" }).toObject(),
        sitesectionid: "section-b",
        siteid: "site-2",
        datecreated: createTimestamp(new Date("2022-02-01")).toObject(),
    },
].map(siteSectionToClass);


export function siteSectionToClass(data: SiteSection.AsObject): SiteSection {
    const site = new SiteSection();
    site.setId(data.Id);
    site.setSitesectionname(data.sitesectionname);
    site.setSitesectionid(data.sitesectionid);
    site.setSiteid(data.siteid);

    if (data.appname) {
        const appNameStruct = createAnyMessage(data.appname);
        site.setAppname(appNameStruct);
    }

    if (data.device) {
        const deviceStruct = createAnyMessage(data.device);
        site.setDevice(deviceStruct);
    }

    if (data.channel) {
        const channelStruct = createAnyMessage(data.channel);
        site.setChannel(channelStruct);
    }

    if (data.datecreated) {
        const timestamp = new Timestamp();
        timestamp.setSeconds(data.datecreated.seconds);
        timestamp.setNanos(data.datecreated.nanos);
        site.setDatecreated(timestamp);
    }

    return site;
}

//#endregion Site Sections DB


//#region Site Groups DB
export const siteGroups: SiteGroup[] = [
    {
        Id: "1",
        sitegroupname: "Site Group A",
        sitegroupid: "WRQRQQW",
        parentsitegroupid: "sdfsdgsg",
        datecreated: createTimestamp(new Date("2022-01-01")).toObject(),
    },
    {
        Id: "1",
        sitegroupname: "Site Group B",
        sitegroupid: "DSDASDFASF",
        parentsitegroupid: "asfasfaFAS",
        datecreated: createTimestamp(new Date("2022-01-01")).toObject(),
    },
].map(siteGroupToClass);



export function siteGroupToClass(data: SiteGroup.AsObject): SiteGroup {
    const siteGroup = new SiteGroup();
    siteGroup.setSitegroupname(data.sitegroupname);
    siteGroup.setSitegroupid(data.sitegroupid);
    siteGroup.setParentsitegroupid(data.parentsitegroupid);

    if (data.datecreated) {
        const timestamp = new Timestamp();
        timestamp.setSeconds(data.datecreated.seconds);
        timestamp.setNanos(data.datecreated.nanos);
        siteGroup.setDatecreated(timestamp);
    }

    return siteGroup;
}

//#endregion Site Groups DB


//#region Helpers

function createAnyMessage(data: object): Struct {
    const struct = new Struct();

    Object.entries(data).forEach(([key, value]) => {
        const fieldValue = new Value();

        if (typeof value === "string") {
            fieldValue.setStringValue(value);
        } else if (typeof value === "number") {
            fieldValue.setNumberValue(value);
        } else if (typeof value === "boolean") {
            fieldValue.setBoolValue(value);
        } else {
            console.warn(`Unsupported type for field '${key}'`);
        }

        struct.getFieldsMap().set(key, fieldValue);
    });

    return struct;
}

function createTimestamp(date: Date): Timestamp {
    const timestamp = new Timestamp();
    timestamp.fromDate(date);
    return timestamp;
}

//#endregion Helpers