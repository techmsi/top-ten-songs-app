import * as PlaylistActions from '../components/Playlist/playlist.actions';
import * as SonglistActions from '../components/Songlist/songlist.actions';

export const ActionCreators = Object.assign({},
  SonglistActions,
  PlaylistActions
);
