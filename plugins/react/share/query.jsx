
import gql from "graphql-tag"

module.exports = {

	
	user_info:  gql`
		userInfo { name email avatar}
	`,
}