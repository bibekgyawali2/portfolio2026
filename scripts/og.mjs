/**
 * Next emits the Open Graph card at out/opengraph-image, with no file
 * extension. Some crawlers refuse an image served without an image
 * Content-Type, so publish a copy at a .png path as well; vercel.json pins
 * the type on the extensionless one.
 */
import { copyFile } from "node:fs/promises";

await copyFile("out/opengraph-image", "out/og.png");
console.log("out/og.png written");
