<script setup>
    import UserNameInput from "../components/UserNameInput.vue";
    import RowContainerWithColor from "../components/RowContainerWithColor.vue";
    import RowContainer from "../components/RowContainer.vue";
    import SignInBox from "../components/SignInBox.vue";
    import { onMounted, ref } from 'vue';

    
    

//    Add three different objects to the ChoiceArray
    var ChoiceArray = ref([]);
    ChoiceArray.value.push({Type:'null',  Priority: null, Choice:'a. ', Description:'', HPEffect: null, AddtionalRules:''})
    ChoiceArray.value.push({Type:'null',  Priority: null, Choice:'b. ', Description:'', HPEffect: null, AddtionalRules:''})
    ChoiceArray.value.push({Type:'null',  Priority: null, Choice:'c. ', Description:'', HPEffect: null, AddtionalRules:''})
    
    var AddtionalRulesArray = [
        "Player with the most RED tokens may now hide their RED tokens.",
        "Player with the most RED tokens may make dictate the choice of the next event."
    ]

    
    function assign() {
        
        // Randomly select values for HPEffect
        var DenyHPEffect = Math.floor(Math.random() * 50);
        var HPEffect1 = Math.floor(Math.random() * 10);
        var HPEffect2 = Math.floor(Math.random() * 3);

        // Randomly select values for ValuePoints
        var DenyValuePoints = Math.floor(Math.random() * 30);
        var ValuePoints1 = Math.floor(Math.random() * 10);
        var ValuePoints2 = Math.floor(Math.random() * 2);
        
        
        // Randomey assign an Additional Rule
        var DenyAdditionalRule = '';
        var AdditionalRule1 = '';
        var AdditionalRule2 = '';
        var cssColoredText = 'color: red'
        
        // probablitly of presenting a rule
        var probablitlyValue = Math.floor(Math.random() * 100);
        if (probablitlyValue < 10) 
        { 
            var ruleIndex = Math.floor(Math.random() * AddtionalRulesArray.length);
            DenyAdditionalRule = AddtionalRulesArray[ruleIndex]
        }


        
        // Randomly Select priority of the Deny Type choice
        var priority = Math.floor(Math.random() * 3);
        ChoiceArray.value[priority] = {Type: 'Deny', Priority: priority, Choice: 'a. ', HPEffect: DenyHPEffect, cssColoredText: 'color: red', Color: 'RED', ValuePoints: DenyValuePoints, Description: 'Deny it is happening', AddtionalRules:''}

        // Priority of the other two choices is conditional to the Deny choice priority
        if(priority == 0)
        {
            ChoiceArray.value[1] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect1, cssColoredText: 'color: red', Color: 'RED', ValuePoints: ValuePoints1, Description: '[Placholder1]', AddtionalRules: DenyAdditionalRule} 
            ChoiceArray.value[2] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect2, cssColoredText: 'color: Blue', Color: 'BLUE', ValuePoints: ValuePoints2, Description: '[Placholder2]', AddtionalRules:''} 
        }
        if(priority == 1)
        {
            ChoiceArray.value[2] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect1, cssColoredText: 'color: rgb(184, 168, 27)', Color: 'YELLOW', ValuePoints: ValuePoints1, Description: '[Placholder1]', AddtionalRules:''} 
            ChoiceArray.value[0] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect2, cssColoredText: 'color: rgb(225, 0, 255)', Color: 'PURPLE', ValuePoints: ValuePoints2, Description: '[Placholder2]', AddtionalRules:''} 
        }
        if(priority == 2)
        {
            ChoiceArray.value[0] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect1, cssColoredText: 'color: Blue', Color: 'BLUE', ValuePoints: ValuePoints1, Description: '[Placholder1]', AddtionalRules:''} 
            ChoiceArray.value[1] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect2, cssColoredText: 'color: Red', Color: 'RED', ValuePoints: ValuePoints2, Description: '[Placholder2]', AddtionalRules:''} 
        }
        console.log(ChoiceArray)
    }
</script>


    
    <template>
      <h1>Generate Card</h1>
      <RowContainerWithColor>
        <h2>Pandemic </h2>
        <!-- <UserNameInput></UserNameInput> -->
        <ol type="A"> 
            <li v-for="item in ChoiceArray "
             v-bind:key="item.Priority"> 
                    <!-- {{item.Choice}}  -->
                    {{item.Description}} 
                    <ul style="list-style-type: lower-roman; padding-bottom: 0;">
                      <li>World Health - {{item.HPEffect}}                         
                      </li>
                      <li>
                        <a :style="item.cssColoredText">{{item.Color}}</a> + {{item.ValuePoints}}                     
                      </li>
                      <li>
                        {{item.AddtionalRules}}
                      </li>
                    </ul>
            </li>
        </ol>
        <!-- <li v-for="items in ChoiceArray">a. {{ChoiceArray[0].Description}} {{ChoiceArray[0].Priority}} 
            <li>World Health: -{{ChoiceArray[0].HPEffect}}</li>
        </li> -->

      </RowContainerWithColor>
      <RowContainer>
        <!-- <SignInBox></SignInBox> -->
        <button id='Generate-Button' @click="assign()">Generate New Card</button>
      </RowContainer>
    </template>
    
    <style>
        @media (min-width: 1024px) {
          .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          ol{
            padding-top:5pc;
          }
          li{
            text-align: center;
          }
          .ColoredText {
            color: rgb(184, 168, 27);
          }
        }

        h2 {
          text-align: center;
        }

        #Generate-Button {
          width: 95%;
          font-size: 50px;
          border-radius: 1000px;
        }
    </style>
    