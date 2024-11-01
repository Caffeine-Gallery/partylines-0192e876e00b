export const idlFactory = ({ IDL }) => {
  const SurveyResult = IDL.Record({
    'democrat' : IDL.Float64,
    'republican' : IDL.Float64,
    'independent' : IDL.Float64,
  });
  const DetailedSurveyResult = IDL.Record({
    'topicAlignments' : IDL.Vec(IDL.Tuple(IDL.Text, SurveyResult)),
    'overallAlignment' : SurveyResult,
  });
  return IDL.Service({
    'getAllSurveyResults' : IDL.Func(
        [],
        [IDL.Vec(DetailedSurveyResult)],
        ['query'],
      ),
    'getAverageResults' : IDL.Func([], [SurveyResult], ['query']),
    'getAverageResultsByTopic' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, SurveyResult))],
        ['query'],
      ),
    'saveSurveyResults' : IDL.Func([DetailedSurveyResult], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
