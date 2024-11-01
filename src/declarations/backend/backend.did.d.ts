import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface DetailedSurveyResult {
  'topicAlignments' : Array<[string, SurveyResult]>,
  'overallAlignment' : SurveyResult,
}
export interface SurveyResult {
  'democrat' : number,
  'republican' : number,
  'independent' : number,
}
export interface _SERVICE {
  'getAllSurveyResults' : ActorMethod<[], Array<DetailedSurveyResult>>,
  'getAverageResults' : ActorMethod<[], SurveyResult>,
  'getAverageResultsByTopic' : ActorMethod<[], Array<[string, SurveyResult]>>,
  'saveSurveyResults' : ActorMethod<[DetailedSurveyResult], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
