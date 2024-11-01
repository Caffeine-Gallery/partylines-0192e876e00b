import Func "mo:base/Func";
import Result "mo:base/Result";

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

    // Store survey results
    stable var surveyResults : [SurveyResult] = [];

    // Function to save survey results
    public func saveSurveyResults(result: SurveyResult) : async () {
        surveyResults := Array.append(surveyResults, [result]);
    };

    // Function to get all survey results
    public query func getAllSurveyResults() : async [SurveyResult] {
        surveyResults
    };

    // Function to get average results
    public query func getAverageResults() : async SurveyResult {
        if (surveyResults.size() == 0) {
            return { democrat = 0; republican = 0; independent = 0 };
        };

        let sum = Array.foldLeft<SurveyResult, SurveyResult>(
            surveyResults,
            { democrat = 0; republican = 0; independent = 0 },
            func (acc, result) {
                {
                    democrat = acc.democrat + result.democrat;
                    republican = acc.republican + result.republican;
                    independent = acc.independent + result.independent;
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
}
