import { SiteArea } from "./expressBridge";
import { UserInfo, DataProviderFactory, myServerAction, serverActionField,actionInfo } from '@remult/core';

export function registerActionsOnServer(area: SiteArea, dataSource: DataProviderFactory) {
    var addAction = (a: any) => {
        let x = <myServerAction>a[serverActionField];
        if (!x) {
            throw 'failed to set server action, did you forget the ServerFunctionDecorator?';
        }
        x.dataSource = dataSource;
        area.addAction(x);
    };
    actionInfo.runningOnServer = true;
    actionInfo.allActions.forEach((a:any) => {
        addAction(a);
    });

}