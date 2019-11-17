// @ts-ignore: 
import customModuleLoader = require('module');

export class CustomModuleLoader {
    constructor(root?: string) {
        if (!root)
            root = '/distServer';
        (<any>customModuleLoader)._originalResolveFilename = (<any>customModuleLoader)._resolveFilename;

        (<any>customModuleLoader)._resolveFilename = (request: string, parent: customModuleLoader, isMain: boolean) => {
            switch (request) {
                case "@remult/core":
                    request = request = process.cwd() + root + '/projects/radweb';
                    break;
                case "@remult/server":
                    request = request = process.cwd() + root + '/projects/radweb-server';
                    break;
                case "@remult/server-postgres":
                    request = request = process.cwd() + root + '/projects/radweb-server-postgres';
                    break;
            }



            return (<any>customModuleLoader)._originalResolveFilename(request, parent, isMain);
        }
    }
}; 