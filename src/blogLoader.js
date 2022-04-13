import fs from 'fs';

const BLOG_FOLDER = '/src/assets/blogs';


export async function getBlogRaw(name) {
    return await readTextFile(`${BLOG_FOLDER}/${name}.md`)
}


async function readTextFile(file) {
    return (await fetch(file)).text();
}


export function getAllBlogNames() {
    return ["crx", "test", "logo", "drifto"];
}