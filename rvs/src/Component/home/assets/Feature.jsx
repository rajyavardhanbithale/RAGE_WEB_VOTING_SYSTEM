import React from 'react';
//tailwind css//
function Feature() {
  return (
    <>
    <br /><br /><br />
      <div>
      <div className="p-4 text-gray-600">
    <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">Vote With Confidence</h1>
    <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">Anytime  Anywhere</h1>
	<h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">This is - what we do :</h1>

	<ul className="grid place-content-center sm:grid-cols-2 gap-8">
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">User Authentication</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Online voting systems prioritize security to prevent fraud and ensure the integrity of the voting process. </p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Voter Registration</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Users usually need to register with the system before they can vote. This process may involve verifying their identity to ensure they are eligible to participate.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">03.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Ballot Creation</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">The software allows administrators to create electronic ballots with various voting options, including candidates' names, propositions, or choices.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Result Tabulation</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">The software automatically tallies the votes and generates results in a timely and accurate manner. It can often produce detailed reports and analytics for post-election analysis.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">05.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Remote Voting</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">One of the primary advantages of online voting is its ability to allow eligible voters to participate from anywhere with an internet connection, increasing accessibility and convenience.
				</p>
			</div>
		</li>
        <li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">06.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Data Privacy</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Protecting the privacy of voters is crucial. The software should adhere to strict data privacy regulations and anonymize voter information.
				</p>
			</div>
		</li>
	</ul>
</div>
      </div>
    </>
  );
}

export default Feature;
