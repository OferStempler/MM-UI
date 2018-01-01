package il.co.boj.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import il.co.boj.config.LoadFile;
import il.co.boj.model.MmDecisionTree;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ofer on 20/12/17.
 */
@Controller
@Log4j
public class MainController {

    @Autowired
    LoadFile loadFile;

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody MmDecisionTree[] getAll() {
        System.out.println("getting all people");
        List<MmDecisionTree> treeList = new ArrayList<>();
        Gson gson = new Gson();
        ObjectMapper mapper = new ObjectMapper();
        String jsonList = loadFile.getData();
        MmDecisionTree[] list = gson.fromJson(jsonList, MmDecisionTree[].class);

//        JSONObject jsnobject = new JSONObject(jsonList);
//        JSONArray jsonArray = jsnobject.getJSONArray(jsonList);
//        for (int i = 0; i < jsonArray.length(); i++) {
//            String explrObject = (jsonArray.getJSONObject(i)).toString();
//            try {
//                MmDecisionTree tree = mapper.readValue(explrObject, MmDecisionTree.class);
//                treeList.add(tree);
//            }catch (Exception e){
//                log.error("Exception" + e.getLocalizedMessage());
//            }
//        }


        return list;

    }
// http://localhost:18083/getMortgageDecisions?leadNum=1-5809949293&idNumber=308488469&idType=1&step=CON&userId=47242249
    @RequestMapping(value = {"/getAllParams", "/getMortgageDecisions"}, params = {"leadNum", "idNumber","idType", "step", "userId" }, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody MmDecisionTree[] getAll(
            @RequestParam("leadNum") String leadNum,
            @RequestParam("idNumber") String idNumber,
            @RequestParam("idType") String idType,
            @RequestParam("step") String step,
            @RequestParam("userId") String userId

            ) {
        System.out.println("leadNum: [" + leadNum + "] idNumber: [" + idNumber + "] idType: [" + idType + "] step: [" + step + "] userId: [" + userId + "] ");
        List<MmDecisionTree> treeList = new ArrayList<>();
        Gson gson = new Gson();
        ObjectMapper mapper = new ObjectMapper();
        String jsonList = loadFile.getData();
        MmDecisionTree[] list = gson.fromJson(jsonList, MmDecisionTree[].class);
        return list;
    }

    @RequestMapping(value = "/emptyListTest", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody MmDecisionTree[] getEmptyList(

    ) {
        System.out.println("Returning empty list");

        MmDecisionTree[] list = new MmDecisionTree[0];
        return list;
    }
}
