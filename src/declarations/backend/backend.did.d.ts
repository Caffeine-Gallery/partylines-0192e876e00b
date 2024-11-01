import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface SurveyResult {
  'democrat' : number,
  'republican' : number,
  'independent' : number,
}
export interface _SERVICE {
  'getAllSurveyResults' : ActorMethod<[], Array<SurveyResult>>,
  'getAverageResults' : ActorMethod<[], SurveyResult>,
  'saveSurveyResults' : ActorMethod<[SurveyResult], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
