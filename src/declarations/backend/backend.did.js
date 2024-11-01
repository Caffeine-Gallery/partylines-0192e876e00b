export const idlFactory = ({ IDL }) => {
  const SurveyResult = IDL.Record({
    'democrat' : IDL.Float64,
    'republican' : IDL.Float64,
    'independent' : IDL.Float64,
  });
  return IDL.Service({
    'getAllSurveyResults' : IDL.Func([], [IDL.Vec(SurveyResult)], ['query']),
    'getAverageResults' : IDL.Func([], [SurveyResult], ['query']),
    'saveSurveyResults' : IDL.Func([SurveyResult], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
