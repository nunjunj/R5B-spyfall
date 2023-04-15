import React from "react";
import Link from "next/link";
import Layout from "../components/TypeWriter";

const HowToPlay = () => {
	return (
		<>
			{/* <Layout>  */}
			<div className="main-menu">
				<h3>How to Play Mafia Report</h3>
				<hr />
				<div>
					{/* <p>
						Spyfall is based off of the board game of the same name, so if
						you've played that before, you'll understand the web version. You'll
						need at least 3 or 4 players, but Spyfall is best with 5 or 6
						players. You can also have 7 or more players, but the game may
						become too easy for the spy.
					</p> */}
					<p>
						Mafia Report is a board game for 4-5 people. Each person is required
						to have their own device (phone/laptop). To start the game, one
						player will create a room and share the room code to other players.
						At the beginning of the game, all players will receive a secret
						word, except one spy. The spy and all players will receive the same
						choices of words Players will then takes turn asking questions to
						each other to determine who the spy is. The spy can win in two ways.
						One is that the time is out before other players can identify the
						spy or they vote the wrong spy. The other way is in the case that
						the spy know the secret word, they can say the word and wins the
						game immediately. Other players should not make it too obvious what
						the secret word is, while asking questions.
					</p>

					<p>
						To test the game, please create a room in one device and join the
						room in another device
					</p>
					{/* <p>
						In my opinion, the easiest way to learn how to play Spyfall would be
						to watch someone else play, as it will help you get a feel for the
						dynamic of the game. Here's a video on YouTube of some people
						playing:
					</p> */}
					{/* <div style={{ textAlign: "center" }}>
						<iframe
							src="https://www.youtube.com/embed/O7W0rH6YpeI"
							className="embed-responsive-item"
						/>
					</div> */}
					<br />
					{/* <p>
						In short, when the game begins, one random player will become the
						spy, and all others will be given a location, and a role within the
						location. For example, if the location of a round was "restaurant,"
						one player might be the chef, another the waiter, another the
						customer, etc. The players will not know who the spy is, and the spy
						will not know the location. Players take turns asking questions to
						each other, doing their best not to outright reveal the location in
						their questions and answers, but not being too vague as to raise
						suspicion. The non-spy group of players wins if they unanimously
						agree on the identity of the spy player. The spy wins if they figure
						out the location, which they have one chance to yell out at any time
						during the round. The spy also wins if the other players unanimously
						accuse someone else, or cannot unanimously decide on someone to
						accuse.
					</p> */}
					{/* <p>
						If you want a little more detail, you can read the full official
						rulebook of the board game version of Spyfall{" "}
						<a
							href="https://www.cryptozoic.com/sites/default/files/icme/u30695/spy_rules_eng_0.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</p> */}

					<style jsx>{`
						text-align: left;
					`}</style>
				</div>
			</div>
			{/* </Layout> */}
			<Link href="/">
				<button>Back to HomePage</button>
			</Link>
		</>
	);
};

export default HowToPlay;
