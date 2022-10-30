<script setup>
    import UserNameInput from "../components/UserNameInput.vue";
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
        
        // probablitly of presenting a rule
        var probablitlyValue = Math.floor(Math.random() * 100);
        if (probablitlyValue < 10) 
        { 
            var ruleIndex = Math.floor(Math.random() * AddtionalRulesArray.length);
            DenyAdditionalRule = AddtionalRulesArray[ruleIndex]
        }


        
        // Randomly Select priority of the Deny Type choice
        var priority = Math.floor(Math.random() * 3);
        ChoiceArray.value[priority] = {Type: 'Deny', Priority: priority, Choice: 'a. ', HPEffect: DenyHPEffect, Color: 'RED', ValuePoints: DenyValuePoints, Description: 'Deny it is happening', AddtionalRules:''}

        // Priority of the other two choices is conditional to the Deny choice priority
        if(priority == 0)
        {
            ChoiceArray.value[1] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect1, Color: 'RED', ValuePoints: ValuePoints1, Description: '[Placholder1]', AddtionalRules: DenyAdditionalRule} 
            ChoiceArray.value[2] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect2, Color: 'BLUE', ValuePoints: ValuePoints2, Description: '[Placholder2]', AddtionalRules:''} 
        }
        if(priority == 1)
        {
            ChoiceArray.value[2] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect1, Color: 'YELLOW', ValuePoints: ValuePoints1, Description: '[Placholder1]', AddtionalRules:''} 
            ChoiceArray.value[0] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect2, Color: 'PURPLE', ValuePoints: ValuePoints2, Description: '[Placholder2]', AddtionalRules:''} 
        }
        if(priority == 2)
        {
            ChoiceArray.value[0] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect1, Color: 'BLUE', ValuePoints: ValuePoints1, Description: '[Placholder1]', AddtionalRules:''} 
            ChoiceArray.value[1] = {Type: 'choicetypePlaceholder', Priority: priority, Choice: 'a. ', HPEffect: HPEffect2, Color: 'RED', ValuePoints: ValuePoints2, Description: '[Placholder2]', AddtionalRules:''} 
        }
        console.log(ChoiceArray)
    }
</script>


    
    <template>
      <h1>Generate Card</h1>
      <RowContainer>
        <!-- <UserNameInput></UserNameInput> -->
        <h1>Pandemic </h1>
        <ol type="A"> 
            <li v-for="item in ChoiceArray "
             v-bind:key="item.Priority"> 
                    {{item.Choice}} 
                    {{item.Description}} 
                    | World Health - {{item.HPEffect}} 
                    | {{item.Color}} + {{item.ValuePoints}}
                    | {{item.AddtionalRules}}
            </li>
        </ol>
        <!-- <li v-for="items in ChoiceArray">a. {{ChoiceArray[0].Description}} {{ChoiceArray[0].Priority}} 
            <li>World Health: -{{ChoiceArray[0].HPEffect}}</li>
        </li> -->

      </RowContainer>
      <RowContainer>
        <!-- <SignInBox></SignInBox> -->
        <button @click="assign()">Generate New Card</button>
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
            text-align: center;
          }
          ol{
            text-align: center;
          }
          li{
            text-align: center;
          }
        }


    </style>
    