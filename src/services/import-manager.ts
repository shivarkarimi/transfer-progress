import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Queue } from 'src/models/queue';
import { QueueItem } from 'src/models/queue-item';
import { QueueStatus } from 'src/models/queue-status';


@Injectable({ providedIn: 'root' })
export class ImportManager {

  public upload(transferQueue: Queue): Observable<any> {

    // Immdesiately empty 5 from

    return from(transferQueue)
      .pipe(
        tap(() => console.log('%c UPLOADING', 'background:#271cbb; color: #dc52fa', transferQueue)),
        tap((qi: QueueItem) => qi.status = QueueStatus.UPLOADING)
      );
  }
}
