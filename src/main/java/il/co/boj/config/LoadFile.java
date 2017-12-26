package il.co.boj.config;

/**
 * Created by ofer on 24/12/17.
 */
import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

@Component
@Log4j
public class LoadFile {

    private String data;

    @PostConstruct
    public String getAllBytes(){

        log.debug("Reading mock request File....");

        try{

            ClassLoader calssLoader = Thread.currentThread().getContextClassLoader();
            InputStream input = calssLoader.getResourceAsStream("Data.txt");

            BufferedReader b = new BufferedReader(new InputStreamReader(input, "UTF-8"));
            StringBuilder builder = new StringBuilder();
            String line = null;
            while ((line = b.readLine()) != null) {
                builder.append(line);
            }
            data = builder.toString();



        }catch (Exception e){
            log.error("Could not read file" + e );
            return null;
        }
        log.debug("Successfully loaded file content to memory");
        return data;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
