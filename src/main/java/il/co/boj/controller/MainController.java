package il.co.boj.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import il.co.boj.config.LoadFile;
import il.co.boj.model.MmDecisionTree;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

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

//    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
//    @ResponseStatus(HttpStatus.OK)
//    public @ResponseBody List<Person> getAll() {
//        System.out.println("getting all people");
//        List<Person> list = new ArrayList<>();
//        Person p1 = new Person();
//        Person p2 = new Person();
//        p1.setAge("111");
//        p1.setId("1");
//        p1.setName("aaa");
//        p2.setAge("222");
//        p2.setName("bbb");
//        p2.setId("2");
//        list.add(p1);
//        list.add(p2);
//
//        return list;
//
//    }
}
