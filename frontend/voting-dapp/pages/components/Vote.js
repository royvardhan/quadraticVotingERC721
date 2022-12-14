import React, { useState } from "react";
import abi from "../utils/abi.json";
import {
  useContractRead,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export default function CreateProposal() {
  const [proposalId, setproposalId] = useState(0);
  const [voteBool, setVoteBool] = useState(null);

  const { config } = usePrepareContractWrite({
    addressOrName: "0xa182fD2fF6D5C09a7587734dff0Ec2b6e86Af9c8",
    contractInterface: abi,
    functionName: "castVote",
    args: [proposalId, voteBool],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div className="flex justify-center font-Josefin font-light">
      <div className="mt-10 p-5 backdrop-opacity-20 backdrop-invert bg-white/20 max-w-xl rounded-3xl min-w-576">
        <p className="font-medium flex justify-center">Cast Your Vote</p>

        <form className="flex flex-col p-5">
          <label>
            Proposal ID:
            <input
              onChange={(event) => {
                setproposalId(event.target.value);
              }}
              className="ml-7 min-w-min placeholder:font-Josefin placeholder:text-slate-400  border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              type="number"
              placeholder="Proposal ID"
            ></input>
          </label>
          <label className="mt-2">
            Vote: <label className="ml-16">Yes:</label>
            <input
              onClick={() => setVoteBool(true)}
              id="Yes"
              className="ml-2"
              type="checkbox"
              value="true"
            ></input>
            <label className="ml-2">No:</label>
            <input
              onClick={() => setVoteBool(false)}
              id="No"
              className="ml-2"
              type="checkbox"
              value="true"
            ></input>
          </label>
          <div className="flex justify-center">
            <input
              className="mt-5 rounded-xl font-semibold font-Josefin text-white bg-black px-3 py-1"
              type="submit"
              value="Submit"
              onClick={() => write()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

//Inputs = Address, String, Date

//This is the third proposal to test the createProposal Function from the frontend
