import { WATCHLIST_STOCKS } from '../../common/config';
import WatchlistOption from './WatchlistOption';

function Watchlist() {
  return (
    <div>
      <WatchlistOption stockdata={WATCHLIST_STOCKS}  />
    </div>
  );
}

export default Watchlist;
