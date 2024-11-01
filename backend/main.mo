import Func "mo:base/Func";
import Result "mo:base/Result";
import Text "mo:base/Text";

import Array "mo:base/Array";
import Float "mo:base/Float";
import Int "mo:base/Int";
import Iter "mo:base/Iter";

actor {
    // Define the type for survey results
    type SurveyResult = {
        democrat: Float;
        republican: Float;
        independent: Float;
    };

    // Define the type for detailed survey results
    type DetailedSurveyResult = {
        overallAlignment: SurveyResult;
        topicAlignments: [(Text, SurveyResult)];
    };

    // Store survey results
    stable var surveyResults : [DetailedSurveyResult] = [];

    // Function to save survey results
    public func saveSurveyResults(result: DetailedSurveyResult) : async () {
        surveyResults := Array.append(surveyResults, [result]);
    };

    // Function to get all survey results
    public query func getAllSurveyResults() : async [DetailedSurveyResult] {
        surveyResults
    };

    // Function to get average results
    public query func getAverageResults() : async SurveyResult {
        if (surveyResults.size() == 0) {
            return { democrat = 0; republican = 0; independent = 0 };
        };

        let sum = Array.foldLeft<DetailedSurveyResult, SurveyResult>(
            surveyResults,
            { democrat = 0; republican = 0; independent = 0 },
            func (acc, result) {
                {
                    democrat = acc.democrat + result.overallAlignment.democrat;
                    republican = acc.republican + result.overallAlignment.republican;
                    independent = acc.independent + result.overallAlignment.independent;
                }
            }
        );

        let count = Float.fromInt(surveyResults.size());
        {
            democrat = sum.democrat / count;
            republican = sum.republican / count;
            independent = sum.independent / count;
        }
    };

    // Function to get average results by topic
    public query func getAverageResultsByTopic() : async [(Text, SurveyResult)] {
        if (surveyResults.size() == 0) {
            return [];
        };

        let topicSums = Array.flatten(Array.map<DetailedSurveyResult, [(Text, SurveyResult)]>(
            surveyResults,
            func (result: DetailedSurveyResult) : [(Text, SurveyResult)] {
                result.topicAlignments
            }
        ));

        let groupedSums = Array.foldLeft<(Text, SurveyResult), [(Text, SurveyResult)]>(
            topicSums,
            [],
            func (acc, (topic, alignment)) {
                switch (Array.find<(Text, SurveyResult)>(acc, func((t, _)) { t == topic })) {
                    case (null) { Array.append(acc, [(topic, alignment)]) };
                    case (?found) {
                        Array.map<(Text, SurveyResult), (Text, SurveyResult)>(acc, func((t, a)) {
                            if (t == topic) {
                                (t, {
                                    democrat = a.democrat + alignment.democrat;
                                    republican = a.republican + alignment.republican;
                                    independent = a.independent + alignment.independent;
                                })
                            } else {
                                (t, a)
                            }
                        })
                    };
                }
            }
        );

        let count = Float.fromInt(surveyResults.size());
        Array.map<(Text, SurveyResult), (Text, SurveyResult)>(
            groupedSums,
            func((topic, sum)) {
                (topic, {
                    democrat = sum.democrat / count;
                    republican = sum.republican / count;
                    independent = sum.independent / count;
                })
            }
        )
    };
}
