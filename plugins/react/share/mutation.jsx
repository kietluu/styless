
import gql from "graphql-tag"

module.exports = {

	upload: gql`
		mutation ($file: Upload!) {
			upload(file: $file)
		}
	`,

	login: gql`
		mutation ($user: JSON!) {
			login (user: $user) @client
		}
	`,

	register: gql`

		mutation ($user: UserInput!) {
			register(user: $user) { ok msg }
		}
	`,
}