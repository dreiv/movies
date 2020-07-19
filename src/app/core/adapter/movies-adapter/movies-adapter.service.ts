import { Injectable } from '@angular/core';

import { Adapter } from '../adapter';
import { toMovie } from '../utils';
import { APIResponse } from '@core/api.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesAdapterService implements Adapter<APIResponse> {
  adapt(item: any): APIResponse {
    return new APIResponse(
      item.results.map(toMovie),
      item.page,
      item.totalResults,
      item.totalPages
    );
  }
}
