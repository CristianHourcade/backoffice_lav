import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Notif } from '../interfaces/notif';

@Injectable({
  providedIn: 'root'
})
export class ComunicateWebServiceService {

  constructor(
    private Http : Http
    ){}

  getAllUsersToken(){
    /** FIRABSE **/
  }

  WebServiceFCM(Notification? : Notif){
    console.log("http://cristianestudio.com/assets/WebServiceFCM.php?token="+Notification.token+"&title="+Notification.title+"&body="+Notification.body+"&icon="+Notification.icon);
    // 
    return this.Http.get("http://cristianestudio.com/assets/WebServiceFCM.php?token="+Notification.token+"&title="+Notification.title+"&body="+Notification.body+"&icon="+Notification.icon);
  }
}
