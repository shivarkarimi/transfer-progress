import { Panel } from './panel';

export class QueueItem {
  name: string;
  waitingTime: Date;
  fileSize: number;
  panel: Panel;

  // has filesystem metadata and associated placeholder panel on UI
  get isReadyForUpload(): boolean {
    return !!this.fileSize && !!this.panel;
  }

  constructor(name: string) {
    this.name = name;
    this.waitingTime = new Date();
  }
}



