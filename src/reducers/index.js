import { combineReducers } from "redux"

import posts from "./posts"
import author from "./author"
import media from "./media"

export default combineReducers({
	posts,
	author,
	media
})