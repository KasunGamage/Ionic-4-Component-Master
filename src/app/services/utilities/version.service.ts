import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  constructor(private swUpdate: SwUpdate, private toastMessageService: ToastService) {}

  showNewVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.toastMessageService.showToast('New version available. Load New Version?');
      });
    }
  }
}
