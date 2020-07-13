import { requestNews } from './request.service';
import { rssToJson } from './rsstojson.service';
import { sendNews } from './sendnews.service';
import { filterNews } from './filternews.service';
import { saveNews } from './tofile.service';

export { requestNews, rssToJson, sendNews, filterNews, saveNews };
